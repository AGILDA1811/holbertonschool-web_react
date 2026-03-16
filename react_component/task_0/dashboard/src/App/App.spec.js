import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the Notifications, Header, Login and Footer components", () => {
    render(<App />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/here is the list of notifications/i)
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
});
