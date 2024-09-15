import { VStack, HStack, Text, Button, IconButton, Divider } from "@chakra-ui/react";
import useMediaQueries from "../hooks/useMediaQuery";
import X from "../assets/icons/X.png"
import Instagram from "../assets/icons/Instagram.png"
import YouTube from "../assets/icons/YouTube.png"
import LinkedIn from "../assets/icons/LinkedIn.png"

const Footer = () => {
    return(
        <VStack backgroundColor="#F1EDE6" w="100%" h="auto" spacing={8}>
           <Text fontSize="3rem" textAlign="center" mt="2rem" fontWeight="700">
           Your Story, Our Voice
           </Text>
           <Text fontSize="3rem" textAlign="center" mt="-2rem" fontWeight="700">
           Let's Create Something Amazing Together
           </Text> 
           <Button
            color="white"
            bg="#FE5708"
            fontSize="2.25rem"
            borderRadius="0.25rem"
            w="16rem"
            h="4rem"
            onClick={() => {
                window.location.href = "";
            }}
            _hover={{
                bg: '#FF7532', 
                color: 'white',
                boxShadow: 'none', 
            }}
            >
            Book Now
            </Button>
            <HStack w="14rem" mt={12} justifyContent="space-between">
                <IconButton
                    aria-label="X"
                    icon={<img src={X} alt="X" />}
                    onClick={() => window.location.href = ""}
                />
                <IconButton
                    aria-label="Instagram"
                    icon={<img src={Instagram} alt="Instagram" />}
                    onClick={() => window.location.href = ""}
                />
                <IconButton
                    aria-label="YouTube"
                    icon={<img src={YouTube} alt="YouTube" />}
                    onClick={() => window.location.href = ""}
                />
                <IconButton
                    aria-label="LinkedIn"
                    icon={<img src={LinkedIn} alt="LinkedIn" />}
                    onClick={() => window.location.href = ""}
                />
            </HStack>
            <Divider
                orientation="horizontal"
                borderColor="#00000080"
                borderWidth={1}
                margin={4}
                w="90%"
                rounded={2}
            />
        </VStack>
    );};

export default Footer;