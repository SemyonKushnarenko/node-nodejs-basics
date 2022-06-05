export const parseArgs = () => {
    console.log(process.argv
        .filter(arg => arg.match(/--\w*/))
        .map(arg => arg = `${arg.slice(2)} is ${process.argv[process.argv.indexOf(arg) + 1]}`)
        .join(', ')
        )
};