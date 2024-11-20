import styled from "styled-components";
import { ContentHeader, DataUser } from "../../index";
export function Header({ stateConfig }) {
  return (
    <ContentHeader>
      <DataUser stateConfig={stateConfig} />
    </ContentHeader>
  );
}
