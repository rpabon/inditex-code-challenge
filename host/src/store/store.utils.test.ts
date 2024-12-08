import { setItemToStorage, getItemFromStorage } from './store.utils';

const mockDateImplementation = (dateString: string) =>
  class extends Date {
    constructor() {
      super(dateString);
    }
  };

describe('Store Utils', () => {
  const testKey = 'testKey';
  const testItem = { data: 'test' };

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(Storage.prototype, 'removeItem');

    global.Date = mockDateImplementation(
      '2023-01-01T00:00:00Z',
    ) as DateConstructor;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should store the item and its timestamp in localStorage', () => {
    setItemToStorage(testKey, testItem);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      testKey,
      JSON.stringify(testItem),
    );

    const timestampKey = `${testKey}_timestamp`;
    const timestamp = new Date().getTime().toString();
    expect(localStorage.setItem).toHaveBeenCalledWith(timestampKey, timestamp);
  });

  it('should remove item and timestamp from storage if retrieved after 24 hours', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => {
        if (key === testKey) {
          return JSON.stringify(testItem);
        }

        if (key === `${testKey}_timestamp`) {
          // Simulate 25 hours passing
          return '1672621200000';
        }

        return null;
      });

    const storedItem = getItemFromStorage(testKey);
    expect(storedItem).toBeNull();

    expect(localStorage.removeItem).toHaveBeenCalledWith(testKey);
    expect(localStorage.removeItem).toHaveBeenCalledWith(
      `${testKey}_timestamp`,
    );
  });

  it('should return item and timestamp from storage if retrieved before 24 hours', () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => {
        if (key === testKey) {
          return JSON.stringify(testItem);
        }

        if (key === `${testKey}_timestamp`) {
          // Simulate 12 hours passing
          return '1672555200000';
        }

        return null;
      });

    const storedItem = getItemFromStorage(testKey);
    expect(storedItem).toEqual(testItem);

    expect(localStorage.removeItem).not.toHaveBeenCalled();
  });
});
