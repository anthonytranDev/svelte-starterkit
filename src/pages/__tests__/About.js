import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"

import About from "../About.svelte"

describe("About", () => {
  it("contains the about title", () => {
    const { getByTestId } = render(About)

    expect(getByTestId("About")).toMatchSnapshot()
  })
})
