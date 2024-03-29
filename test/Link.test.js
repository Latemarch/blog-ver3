import renderer from "react-test-renderer";
import LinkTest from "../src/components/LinkTest";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <LinkTest page="http://www.facebook.com">Facebook</LinkTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
