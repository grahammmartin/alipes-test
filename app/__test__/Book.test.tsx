import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import Book from "@/components/book/Book";

/* eslint-disable */
class ResizeObserverMock {
  constructor() {}

  observe() {}

  unobserve() {}

  disconnect() {}
}
/* eslint-disable */
global.ResizeObserver = ResizeObserverMock;

describe("Book component", () => {
  it("should render the component correctly", () => {
    const { container } = render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with correct title", () => {
    const { getByText } = render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    expect(getByText("Test Book")).toBeInTheDocument();
  });

  it("renders with correct author", () => {
    const { getByText } = render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    expect(getByText("Author : Test Author")).toBeInTheDocument();
  });

  it("renders with correct price", () => {
    const { getByText } = render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    expect(getByText("price : 10$")).toBeInTheDocument();
  });

  it("renders with correct description", () => {
    const { getByText } = render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    expect(getByText("description : Test description")).toBeInTheDocument();
  });

  it("renders with menu items", async () => {
    render(
      <Book
        title="Test Book"
        author="Test Author"
        price={10}
        description="Test description"
      />
    );
    const menu = screen.getByTestId("menu-box");
    fireEvent.click(menu);

    await waitFor(() => {
      const option1 = screen.getByText("View Details");
      const option2 = screen.getByText("Purchase");
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
    });
  });
});
