import React from "react"
const UMemoAndCallBack = () => {
    const bar = React.useCallback(() => {}, [])
    const baz = React.useMemo(() => [1, 2, 3], [])

    return (
    <div>
        <h1>Use Memo & Use Callback</h1>
        <div>I don't know...This <a href='https://kentcdodds.com/blog/usememo-and-usecallback' target='_blank' rel='noreferrer'>guy</a> says don't bother most of the time</div>
        <div>Except for Expensive graphic heavy or large async loads</div>
        <Foo bar={bar} baz={baz} />
    </div>)
}

function Foo({bar, baz}) {
    const buzz = (options) => console.log('buzz: ', options);
    React.useEffect(() => {
      const options = {bar, baz}
      buzz(options)
    }, [bar, baz])
    return <div>foobar</div>
  }
  
export default UMemoAndCallBack;