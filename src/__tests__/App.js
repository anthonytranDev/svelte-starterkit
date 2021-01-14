import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"
import { Router } from "svelte-routing"

import App from "../App.svelte"

describe("App", () => {
  it("should render", () => {
    const { getByTestId } = render(App)

    expect(getByTestId("App")).toMatchSnapshot()
  })
})
