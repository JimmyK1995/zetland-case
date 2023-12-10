// React
import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';

// Styled
import { LoadingWrapper } from './loading.styled';

interface props {
    hide?: boolean
}

const Loading: React.FC<props> = ({ hide }) => {
  return (
    <LoadingWrapper $hide={hide}>
          <BeatLoader
        color='#FF3508'
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingWrapper>
  )
}

export default Loading