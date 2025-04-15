export const sql = {
    connect: vi.fn().mockResolvedValue({
      query: vi.fn().mockResolvedValue({
        rows: [],
        rowCount: 0,
      }),
    }),
  };
  