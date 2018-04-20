import styled from 'styled-components'

export const TableStyle = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

& caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

& tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

& th,
& td {
  padding: .625em;
  text-align: center;
}

& th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  & {
    border: 0;
  }

  & caption {
    font-size: 1.3em;
  }
  
  & thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  & tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  & td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  & td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  & td:last-child {
    border-bottom: 0;
  }
}
`


  


