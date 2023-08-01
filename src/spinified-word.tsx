export const SpinifiedWord = ({ children }: any) => {
    if (typeof children !== 'string') {
        throw new Error('SpinifiedWord component only accepts string as children');
    }
    
    return children.split('').map((char: string, index: number) => {
        return <span key={index} className="spin-letter">{char}</span>
    })
}