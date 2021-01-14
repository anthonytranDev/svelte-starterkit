import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { Router } from 'svelte-routing'

import Blog from '../Blog/index.svelte'

describe('Blog', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Router>
        <Blog />
      </Router>
    )

    expect(getByTestId('Blog')).toMatchSnapshot()
  })
})
