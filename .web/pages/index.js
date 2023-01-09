import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Button, HStack, Heading} from "@chakra-ui/react"
import NextHead from "next/head"

const EVENT = "ws://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"count": 0, "events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const socket = useRef(null)
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  if (!socket.current) {
    connect(socket, state, result, setResult, router, EVENT)
  }
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, result, setResult, router, socket.current)
  }
  update()
})
return (
<HStack>
<Button colorScheme="red"
onClick={() => Event([E("state.decrement", {})])}
sx={{"borderRadius": "1em"}}>
{`Decrement`}</Button>
<Heading sx={{"fontSize": "2em"}}>
{state.count}</Heading>
<Button colorScheme="green"
onClick={() => Event([E("state.increment", {})])}
sx={{"borderRadius": "1em"}}>
{`Increment`}</Button>
<NextHead>
<title>{`Pynecone App`}</title>
<meta name="description"
content="A Pynecone app."/>
<meta content="favicon.ico"
property="og:image"/></NextHead></HStack>
)
}