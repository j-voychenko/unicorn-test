import styled from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ScoreCell = styled.div<{ $isActive: boolean }>`
  font-size: 25px;
  width: 150px;
  display: flex;
  justify-content: space-around;
  background-color: ${({ $isActive }) =>
    $isActive ? "#007FFF" : "rgba(152, 152, 152, 0.23)"};

  border-left: 3px solid rgba(255, 255, 255, 0.87);
  border-right: 3px solid rgba(255, 255, 255, 0.87);

  &:first-child {
    border-top: 3px solid rgba(255, 255, 255, 0.87);
    border-radius: 20px 20px 0 0;
  }

  &:last-child {
    border-bottom: 3px solid rgba(255, 255, 255, 0.87);
    border-radius: 0 0 20px 20px;
  }xs
`;

export const Timer = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-around;
`;

export const Bank = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: space-around;
`;

export const TimeIsOver = styled.p`
  margin: 0;
`;

export const StartNewGame = styled.p`
  border-bottom: 3px solid rgba(255, 255, 255, 0.87);
  margin: 0;
  cursor: pointer;
`;

export const TimeIsOverContainer = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
