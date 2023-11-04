import { render } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header component", () => {
  const { container } = render(<Header />);

  it("contains expected links", () => {
    const expectedHrefs = ["/posts", "/projects", "/shorts"];

    expectedHrefs.forEach((href) => {
      const linkElement = container.querySelector(`a[href='${href}']`);
      expect(linkElement).not.toBeNull();
    });
  });
});
