import { render } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header component", () => {
  it('has justify-center style and contains text "haha"', () => {
    const { getByText, container } = render(<Header />);

    // Check if the text 'haha' is present
    expect(getByText("haha")).toBeInTheDocument();

    // Check if it has the justify-center style from Tailwind
    // This checks if the first child of the rendered component has the class 'justify-center'
    expect(container.firstChild).toHaveClass("justify-center");
  });
});
