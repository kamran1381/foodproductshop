const TopBox = ({img , title , price}) => {
    return (
        <div>
            <div class="flex flex-row rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="w-2/5 h-4">
                    <img class="rounded-sm " src={img} alt="" />
                </div>
                <div class="p-6 w-3/5">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 hover:text-cyan-800 transition-all cursor-pointer">
                        {title}
                    </h5>
                    <span className='mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>${price }</span>
                </div>
            </div>

        </div>
    )

}

export default TopBox