import TaskList from "./TaskList";

const Application = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1>Jadwal Kegiatan Harian</h1>
                <div className="">
                    <input
                        type="text"
                        placeholder="Tambahkan kegiatan Anda"
                        className="col-12 col-lg-8 p-2 mt-3 mb-5 mx-2 items-center justify-center"
                        style={{}}></input>
                    <button
                        className="p-3"
                        style={{
                            border: "none",
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "4px",
                        }}>
                        Tambah Kegiatan
                    </button>
                    <TaskList />
                </div>
            </div>
        </div>
    );
};

export default Application;
