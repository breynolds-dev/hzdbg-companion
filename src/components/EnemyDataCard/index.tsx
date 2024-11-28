import { Enemy } from "../../data/types";
import styles from "./index.module.css";

export interface EnemyDataCardProps {
  enemyData: Enemy;
}

export const EnemyDataCard = ( { enemyData }: EnemyDataCardProps ) => {
  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-lg bg-white shadow h">
        <div>
          <div className="flex flex-row">
            <div className={styles.hexagon}>
              <span>{enemyData.hitPoints}</span>
            </div>
            <div className="-ml-1 border-red-50 z-10">
              <div className={styles.hexagon}>
                <span>HP</span>
              </div>
            </div>
            <div className="flex-auto" />
          </div>

          <div className="flex flex-row">
            <div className="pl-2">
              <div className={styles.hexagon}>
                <span>{enemyData.armor}</span>
              </div>
            </div>
            <div className="-ml-1 border-red-50 z-20">
              <div className={styles.hexagon}>
                <span>10</span>
              </div>
            </div>
            <div className="flex-auto" />
          </div>

          <div className="flex flex-row">
            <div>
              <div className={styles.hexagon}>
                <span>10</span>
              </div>
            </div>
            <div className="-ml-1 border-red-50 z-20">
              <div className={styles.hexagon}>
                <span>10</span>
              </div>
            </div>
            <div className="flex-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
