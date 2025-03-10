import styled from "styled-components";

export const Container = styled.div`
    min-width: 260px;
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    .button-add {
     color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    .button-delete {
     color: ${({ theme }) => theme.COLORS.RED};
    }

    > button {
        border: none;
        background: none;
    }

     input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        outline: none;
        border: none;

        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }
`