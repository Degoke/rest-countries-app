import styled from 'styled-components'

export default styled.div`
  width: 85vw;
  margin: auto;

  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 7vw;
    grid-row-gap: 3rem;
  }

  @media all and (max-width: 1050px) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media all and (max-width: 740px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media all and (max-width: 600px) {
    .round {
      display: none;
    }
  }

  .search {
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
  }

  @media all and (max-width: 410px) {
    section {
      grid-template-columns: repeat(1, 1fr);
    }

    .search {
      flex-direction: column;

      select {
        margin-top: 2rem;
      }
    }
  }

  .buttons {
    margin: 2rem auto;
    display: flex;
    justify-content: flex-end;
  }

  .pagination-button {
    padding: 0.2rem 1rem;
    box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    background-color: ${(props) => props.theme.color.elements};
    font-size: ${(props) => props.theme.font.medium};
    border-radius: ${(props) => props.theme.borderRadius};
    margin: auto 0.2rem;

    @media all and (max-width: 600px) {
      font-size: ${(props) => props.theme.font.small};
    }

    :disabled {
      background-color: black;
    }
  }

  .round {
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
  }

  .current {
    background-color: black;
  }
`
