import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/svelte"
import { Router, Route } from "svelte-routing"

import BlogPost from "../BlogPost.svelte"

describe("BlogPost", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <Router>
        <BlogPost params="{params}" />
      </Router>
    )

    expect(getByTestId("BlogPost")).toMatchSnapshot()
  })
})
