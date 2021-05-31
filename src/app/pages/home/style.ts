import styled from 'styled-components'

export default styled.div`
  width: 90vw;
  margin: auto;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 5vw;
    grid-row-gap: 3rem;
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
  }
`
