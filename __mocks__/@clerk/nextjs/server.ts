export const exampleUser = "user_2jjYF34Vt4fdqWEVYwVx8fQtNgz"

vi.mock("@clerk/nextjs/server", async () => {
    const actual = await vi.importActual<any>("@clerk/nextjs/server");
    return {
        ...actual,
        auth: () => ({ userId: exampleUser }),
    };
});