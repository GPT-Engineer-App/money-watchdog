import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">News</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Main Headline: Market Trends Today</Heading>
          <Text fontSize="lg">Stay updated with the latest market trends and financial news. Our expert analysis and insights will help you make informed decisions.</Text>
        </Container>
      </Box>

      {/* Latest News Section */}
      <Box py={10}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={6}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={2}>News Article 1</Heading>
              <Text>Summary of the news article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>News Article 2</Heading>
              <Text>Summary of the news article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>News Article 3</Heading>
              <Text>Summary of the news article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>News Article 4</Heading>
              <Text>Summary of the news article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Market Data Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={6}>Market Data</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={2}>Market Index 1</Heading>
              <Text>Details about the market index.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>Market Index 2</Heading>
              <Text>Details about the market index.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>Market Index 3</Heading>
              <Text>Details about the market index.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box py={10}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={6}>Featured Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={2}>Featured Article 1</Heading>
              <Text>Summary of the featured article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>Featured Article 2</Heading>
              <Text>Summary of the featured article. This is a brief description to give readers an idea of what the article is about.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact Information</Heading>
              <Text>Email: contact@financialtimes.com</Text>
              <Text>Phone: +123 456 7890</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Privacy Policy</Heading>
              <Text>Read our privacy policy to understand how we handle your data.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Terms of Service</Heading>
              <Text>Review our terms of service before using our website.</Text>
            </Box>
          </SimpleGrid>
          <Divider borderColor="gray.600" />
          <Flex justify="space-between" align="center" mt={10}>
            <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal><FaFacebook size="24px" /></Link>
              <Link href="#" isExternal><FaTwitter size="24px" /></Link>
              <Link href="#" isExternal><FaLinkedin size="24px" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;