import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import { Router } from 'svelte-routing'

import Header from '../Header.svelte'

describe('Header', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    )

    expect(getByTestId('Header')).toMatchSnapshot()
  })
})
