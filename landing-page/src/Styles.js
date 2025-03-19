import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px
  margin: 0 auto
  padding: 10px 0
`

export const Nav = styled.div`
  display: flex
  align-items: center
  justify-content: space-between
  padding: 10px 20px
`

export const ListaHeader = styled.div`
  display: flex
  align-items: center

  a {
    color: #333
    text-decoration: none
    margin: 0 15px

    &:hover {
      color: #007bff
    }
  }
`

export const Button = styled.button`
  background-color: #007bff
  color: white
  padding: 10px 20px
  border: none
  border-radius: 5px
  cursor: pointer

  &:hover {
    background-color: #0056b3
  }
`