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
  .buttons {
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    padding: 0.2rem 1rem;
    box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    background-color: ${(props) => props.theme.color.elements};
    font-size: ${(props) => props.theme.font.medium};
    border-radius: ${(props) => props.theme.borderRadius};

    :disabled {
      background-color: black;
    }
  }
`
