import styled from "styled-components/macro";

export const PageContainer = styled.main`
  max-width: 1400px;
  margin: auto;
  margin-bottom: 80px;
  padding: 10px;

  min-height: calc(100vh - 80px - 120px - 80px);

  @media (max-width: 667px) {
    padding: 0;
  }
`;
