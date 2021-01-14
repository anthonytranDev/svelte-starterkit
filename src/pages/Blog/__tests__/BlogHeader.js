import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"

import BlogHeader from "../BlogHeader.svelte"

describe("BlogHeader", () => {
  it("should render", () => {
    const { getByTestId } = render(BlogHeader)

    expect(getByTestId("BlogHeader")).toMatchSnapshot()
  })
})
