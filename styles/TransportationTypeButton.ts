import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#1a73e8' : '#f1f1f1')};
  padding: 12px 16px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const ButtonText = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? '#fff' : '#1a73e8')};
  font-size: 16px;
`;