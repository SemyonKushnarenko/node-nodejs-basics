export const parseEnv = () => {
    const res = []
    for (const env in process.env) {
        if (env.match(/RSS_\w*/)) res.push(`${env}=${process.env[env]}`)
    }
    console.log(res.join('; '))
};