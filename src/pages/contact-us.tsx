import { useState } from 'react'

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import axios from 'axios'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'

import Hero from 'components/hero'

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [formSent, setFormSent] = useState<boolean>(false)

  const onSubmit = async values => {
    try {
      await axios.post('/api/contact', {
        ...values,
      })
      setFormSent(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Box>
      <Hero
        title="Give us a ring, we’re here to help."
        description="We offer practical solutions designed to support personal and business insurance customers. We work closely with our network of Leading UK Insurance Providers who are constantly developing new initiatives to meet evolving client demands, to provide cost-effective insurance policies. "
      />
      {formSent ? (
        'Thank you for your enquiry, a member of our team will get back to you as soon as they can.'
      ) : (
        <Box bg="WHITE" px={28} py={16} pb={44}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
              <Flex flexDirection="column" gap={4} w="50vw">
                <FormControl isRequired>
                  <FormLabel>Email address:</FormLabel>
                  <Input {...register('email', { required: true })} isInvalid={Boolean(errors.email)} />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                  {errors.email && <FormErrorMessage>Email is required.</FormErrorMessage>}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your name:</FormLabel>
                  <Input {...register('name', { required: true })} isInvalid={Boolean(errors.name)} />
                  {errors.name && <FormErrorMessage>Name is required.</FormErrorMessage>}
                </FormControl>
                <FormControl>
                  <FormLabel>Phone:</FormLabel>
                  <Input {...register('phone')} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message:</FormLabel>
                  <Textarea {...register('message', { required: true })} isInvalid={Boolean(errors.message)} />
                  {errors.message && <FormErrorMessage>Message is required.</FormErrorMessage>}
                </FormControl>
                <Button type="submit" variant="primary">
                  Send enquiry
                </Button>
              </Flex>
            </Center>
          </form>
        </Box>
      )}
    </Box>
  )
}

export default Home
