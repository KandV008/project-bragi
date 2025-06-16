export const mockCursor = {
    sort: vi.fn().mockReturnThis(),
    skip: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    toArray: vi.fn(), 
    matchedCount: 1,
    deletedCount: 1,
};

export const mockCollection = {
    find: vi.fn((query) => mockCursor), 
    findOne: vi.fn(),
    insertOne: vi.fn(),
    updateOne: vi.fn().mockReturnValue(mockCursor),
    deleteOne: vi.fn().mockReturnValue(mockCursor),
    aggregate: vi.fn().mockReturnValue(mockCursor),
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
