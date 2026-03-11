import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
    test("renders the notifications title", () => {
        render(<Notifications />);
        const title = screen.getByText(/here is the list of notifications/i)
        expect(title).toBeInTheDocument();
    });

    test("renders a close button", () => {
        render(<Notifications />);
        const button = screen.getByRole("button", { name: /close/i });
        expect(button).toBeInTheDocument();
    });

    test("renders 3 list items", () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(3);
    });

    test("renders all notification texts and ignores case", () => {
        render(<Notifications />);

        expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
        expect(screen.getByText(/new course available/i)).toBeInTheDocument();
        expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
        expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
        expect(screen.getByText(/complete by eod/i)).toBeInTheDocument();
    });

    test("clicking the close button logs to console", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
        render(<Notifications />);
        const button = screen.getByRole("button", { name: /close/i });
        fireEvent.click(button);
        expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");
        logSpy.mockRestore();
    });
});
