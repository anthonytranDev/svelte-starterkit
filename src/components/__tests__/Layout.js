import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"
import { Router } from "svelte-routing"

import Layout from "../Layout/index.svelte"

describe("Layout", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <Router>
        <Layout />
      </Router>
    )

    expect(getByTestId("Layout")).toMatchSnapshot()
  })
})
