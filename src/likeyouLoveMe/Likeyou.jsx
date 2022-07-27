import { Center, Heading, Text } from "@chakra-ui/react";

export default function LikeYou() {
  return (
    <>
      <Center display="flex" flexDirection="column" alignItems="center" mt="100px">
        <Heading
          fontFamily="'Anton', sans-serif"
          fontSize="28px"
          fontWeight="800"
          color="#595959"
        >
          LIKE YOU WE LOVE MUSIC...
        </Heading>
        <Text>
          And we believe a Headphone is more than just an instrument for sound.
        </Text>
        <Text>
          It’s the key to a mind-blowing moment of emotion, bringing you closer
          to your favourite artist, and yourself.
        </Text>
        <Text>
          We’ve curated the world’s finest headphones & earphones to help you
          discover the riffs, percussions, basslines and solos that were always
          there but never heard.
        </Text>
      </Center>
    </>
  );
}
