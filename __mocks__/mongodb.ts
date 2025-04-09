export const mockCursor = {
    sort: vi.fn().mockReturnThis(),
    skip: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    toArray: vi.fn(), 
};

export const mockCollection = {
    find: vi.fn().mockReturnValue(mockCursor),
    findOne: vi.fn(),
    insertOne: vi.fn(),
};

export const mockDb = {
    collection: vi.fn().mockReturnValue(mockCollection),
};

export const mockClient = {
    connect: vi.fn(),
    db: vi.fn().mockReturnValue(mockDb),
};

vi.mock("mongodb", async () => {
    const actual = await vi.importActual<any>("mongodb");
    return {
      ...actual,
      MongoClient: vi.fn(() => mockClient),
    };
  });
