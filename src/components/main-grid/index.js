import styled from 'styled-components'

const MainGrid = styled.main`
    display: grid;
    grid-gap: 10px;
    padding: 16px;
    @media(min-width: 860px) {
      grid-template-areas: "profileArea welcomeArea profileRelation";
      grid-template-columns: 160px 1rf 312px;
    }
`
export default MainGrid