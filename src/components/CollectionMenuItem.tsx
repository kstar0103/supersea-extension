import { Text, HStack, useColorModeValue } from '@chakra-ui/react'
import Logo from './Logo'
import LockedFeature from './LockedFeature'
import { useUser } from '../utils/user'
const CollectionMenuItem = ({
  type,
  onClick,
}: {
  type: 'items'
  onClick: () => void
}) => {
  const { isSubscriber } = useUser() || { isSubscriber: false }
  return (
    <HStack
      height="100%"
      spacing="4"
      px="30px"
      onClick={isSubscriber ? onClick : undefined}
      cursor={isSubscriber ? 'pointer' : 'not-allowed'}
      className={[
        'SuperSea__CollectionMenuItem__Item',
        !isSubscriber && '.SuperSea__CollectionMenuItem__Item--disabled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Logo
        width="24px"
        height="24px"
        color={useColorModeValue('black', 'white')}
      />
      <Text
        fontWeight="600"
        fontFamily="Poppins, sans-serif;"
        color={useColorModeValue('black', 'white')}
      >
        Top Ranked
      </Text>
      {isSubscriber ? null : <LockedFeature level="subscriber" />}
    </HStack>
  )
}

export default CollectionMenuItem
