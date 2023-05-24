<py-config>
    plugins = [
    "https://pyscript.net/latest/plugins/python/py_tutor.py"
    ]
</py-config>

export default function HelloWorldPyScript() {


    return <section class="pyscript">
        Hello world! <br />
        This is the current date and time, as computed by Python:
        <py-script>
            from datetime import datetime
            now = datetime.now()
            display(now.strftime("%m/%d/%Y, %H:%M:%S"))
        </py-script>
    </section>
}
