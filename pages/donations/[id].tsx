import Delete from '@/components/Delete'
import Details from '@/components/Details'
// import Supports from '@/components/Supports'
import NavBtn from '@/components/NavBtn'
import Payment from '@/components/Payment'
import { EventStruct, RootState, SupportStruct } from '@/utils/type.dt'
import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Donor from '@/components/Donor'
import Ban from '@/components/Ban'
import { generateCharities, generateSupports } from '@/utils/fakeData'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { globalActions } from '@/store/globalSlices'

interface PageProps {
  charityData: EventStruct
  supportsData: SupportStruct[]
  owner: string
}

const Page: NextPage<PageProps> = ({ charityData, supportsData, owner }) => {
  
  const { event, supports } = useSelector((states: RootState) => states.globalStates)
  const dispatch = useDispatch()
  const { setEvent, setOwner } = globalActions

  // useEffect(() => {
  //   // dispatch(setOwner(owner))
  //   // dispatch(setEvent(charityData))
  //   // dispatch(setSupports(supportsData))
  // }, [dispatch, setEvent, charityData, supportsData])

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>Charity | {event?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-10"></div>
      <div className="h-10"></div>
      <div className="h-10"></div>

      {event && (
        <div
          className="flex flex-col sm:flex-row sm:justify-between items-start
          lg:w-2/3 w-full mx-auto space-y-4 sm:space-y-0 sm:space-x-10 my-10 px-8 sm:px-0"
        >
          <Details supports={supports} charity={event} />
          <Payment owner={owner} supports={supports.slice(0, 4)} charity={event} />
        </div>
      )}

      {event && (
        <>
          <Delete charity={event} />
          <Donor charity={event} />
          <Ban charity={event} />
          {/* <Supports supports={supports} /> */}
          <NavBtn owner={event?.owner} donationId={Number(id)} />
        </>
      )}
    </div>
  )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query

  const owner: string = ''
  const charityData: EventStruct = generateCharities(Number(id))[0]
  // const supportsData: SupportStruct[] = generateSupports(7)
  return {
    props: {
      owner: JSON.parse(JSON.stringify(owner)),
      charityData: JSON.parse(JSON.stringify(charityData)),
      // supportsData: JSON.parse(JSON.stringify(supportsData)),
    },
  }
}
