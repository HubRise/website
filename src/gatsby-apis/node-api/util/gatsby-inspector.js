// Start the inspector (debugger back-end) in blocking mode

if (process.env.ENABLE_INSPECTOR === 'true') {
  const inspector = require('inspector')

  // Gatsby 2.24.15 seems to start the inspector by default. Close it.
  inspector.close()

  // Display the names of all started processes.
  console.log(`Current process: ${process.argv[1]}`)

  // We only want the inspector to start on the `.cache/tmp-xxx.js` process which is started by `gatsby develop`
  if (process.argv[1].match(/.cache\/tmp-.*/)) {
    console.log(`Starting inspector for ${process.argv[1]}`)

    // Start the inspector in blocking mode (`true`): the process will pause here until a debugger is attached.
    console.log(`
!!! EXECUTION PAUSED: attach a debugger to resume the process.
!!! To disable the debugger, restart the process without setting the ENABLE_INSPECTOR environment variable.
`)
    inspector.open(9229, '0.0.0.0', true)
  }
}
