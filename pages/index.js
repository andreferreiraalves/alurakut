import styled from 'styled-components'
import Box from '../src/components/box'
import MainGrid from '../src/components/main-grid'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <MainGrid>
      <Box style={{ gridArea: 'profileArea' }}>
        Image
      </Box>
      <Box style={{ gridArea: 'welcomeArea' }}>
        Bem Vindo
      </Box>
      <Box style={{ gridArea: 'profileRelation' }}>
        Comunidades
      </Box>
    </MainGrid>
  )
}
