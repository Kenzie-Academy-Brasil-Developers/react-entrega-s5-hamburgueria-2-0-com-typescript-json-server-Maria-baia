import styled from 'styled-components';
import TextField from "@mui/material/TextField";

interface HeaderDashboardStyleProps {
      open: boolean;
}

export const HeaderDashboardStyle = styled.div<HeaderDashboardStyleProps>`
      background-color: #f5f5f5;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      svg {
            color: #bdbdbd;
            font-size: 22px;
            font-weight: 900px;
            margin: 5px;
      }

      @media (max-width: 768px) {
            ${({open}) => open ===false && `
                  img, span{
                        display: none;
                  }
            `}
      }
`

export const Icons = styled.div`
      display: flex;
      align-items: center;
      svg {
            cursor: pointer;
      }
`

export const TextFieldStyled = styled(TextField)`
      width: 382px;
      background-color: #ffffff;
      .search {
            background-color: #27ae60;
            width: 53px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            svg {
                  font-size: 14px;
                  fonte-weight:  900;
                  color: #ffffff;
            }
      }
`