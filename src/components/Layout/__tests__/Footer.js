import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"

import Footer from "../Footer.svelte"

describe("Footer", () => {
  it("should render", () => {
    const { getByTestId } = render(Footer)

    expect(getByTestId("Footer")).toMatchSnapshot()
  })
})
