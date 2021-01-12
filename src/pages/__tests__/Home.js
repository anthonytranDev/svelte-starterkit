import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"

import Home from "../Home.svelte"

describe("Home", () => {
  it("renders", () => {
    const { getByTestId } = render(Home)

    expect(getByTestId("Home")).toMatchSnapshot()
  })
})
