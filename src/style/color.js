// 컬러정의 입니다.
// primary : 메인컬러
// secondary : 세컨더리 컬러
// warning : 경고컬러
// danger : 위험컬러
import { css } from "styled-components";

const color = {
  default: {
    color: css`color: rgba(0, 0, 0, 0.87);`,
    backgroundColor: css`background-color: #fff;`
  },
  primary: {
    color: css`color: rgb(0, 188, 212);`,
    backgroundColor: css`background-color: rgb(0, 188, 212);`
  },
  secondary: {
    color: css`color: rgb(255, 64, 129);`,
    backgroundColor: css`background-color: rgb(255, 64, 129);`
  },
  disabled: {
    color: css`color: rgba(0, 0, 0, 0.3);`,
    backgroundColor: css`background-color: rgba(0, 0, 0, 0.3);`
  },
}

export default color