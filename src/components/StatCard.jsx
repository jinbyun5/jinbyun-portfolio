function StatCard({ icon, number, description, color = 'blue' }) {

    const styles = {
        blue: {
            border: 'border-jb-blue/5',
            borderBottom: 'border-b-jb-blue',
            iconBg: 'bg-jb-blue/10',
            iconText: 'text-jb-blue',
            number: 'text-jb-blue',
        },
        accent: {
            border: 'border-jb-accent/5',
            borderBottom: 'border-b-jb-accent',
            iconBg: 'bg-jb-accent/10',
            iconText: 'text-jb-accent',
            number: 'text-jb-accent',
        },
    };

    const style = styles[color];

    return (
        <div className={`flex-1 rounded-xl border ${style.border} p-5 flex flex-col gap-3 border-b-4 shadow-md ${style.borderBottom}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${style.iconBg}`}>
                <span className={`text-xl ${style.iconText}`}>{icon}</span>
            </div>
            <span className={`text-2xl font-medium leading-none ${style.number}`}>{number}</span>
            <span className="text-sm text-jb-brown/70">{description}</span>
        </div>
    );
}

export default StatCard;